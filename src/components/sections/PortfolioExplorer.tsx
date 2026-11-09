import { useMemo, useState } from 'react';
import {
  ArrowUpRight,
  CheckCircle2,
  Eye,
  LayoutGrid,
  List,
  Search,
  X,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  PORTFOLIO_ITEMS,
  type PortfolioCategory,
  type PortfolioItem,
} from '@/data/portfolio';
import { getDictionary, getLocalizedPath, type Locale } from '@/i18n';

interface PortfolioExplorerProps {
  locale: Locale;
  compact?: boolean;
}

type CategoryFilter = 'all' | PortfolioCategory;

export function PortfolioExplorer({
  locale,
  compact = false,
}: PortfolioExplorerProps) {
  const dict = getDictionary(locale);
  const [category, setCategory] = useState<CategoryFilter>('all');
  const [query, setQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(
    null
  );

  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PORTFOLIO_ITEMS.filter((item) => {
      const matchesCategory = category === 'all' || item.category === category;
      if (!matchesCategory) return false;
      if (!q) return true;
      return (
        item.title[locale].toLowerCase().includes(q) ||
        item.clientSector[locale].toLowerCase().includes(q) ||
        item.solutionType[locale].toLowerCase().includes(q) ||
        item.capabilities.some((cap) => cap.toLowerCase().includes(q))
      );
    });
  }, [category, query, locale]);

  const displayedItems = compact ? filteredItems.slice(0, 6) : filteredItems;
  const portfolioUrl = getLocalizedPath(locale, 'portfolio');
  const contactUrl = getLocalizedPath(locale, 'contact');

  const categoryTabs: { key: CategoryFilter; label: string }[] = [
    { key: 'all', label: dict.portfolioSection.categories.all },
    { key: 'compro', label: dict.portfolioSection.categories.compro },
    { key: 'landing', label: dict.portfolioSection.categories.landing },
    { key: 'store', label: dict.portfolioSection.categories.store },
    { key: 'software', label: dict.portfolioSection.categories.software },
    { key: 'mobile', label: dict.portfolioSection.categories.mobile },
  ];

  function resetFilters() {
    setCategory('all');
    setQuery('');
  }

  return (
    <TooltipProvider delayDuration={120}>
      <section className="border-t border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-wider text-emerald-700 uppercase">
                {dict.portfolioSection.eyebrow}
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                {dict.portfolioSection.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                {dict.portfolioSection.subtitle}
              </p>
            </div>

            {compact && (
              <a
                href={portfolioUrl}
                className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-emerald-700 hover:text-emerald-800"
              >
                <span>{dict.portfolioSection.viewAllLink}</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
          </div>

          <div className="mt-8 flex flex-col justify-between gap-3 rounded-md border border-slate-200 bg-slate-50 p-3 lg:flex-row lg:items-center">
            <Tabs
              value={category}
              onValueChange={(val) => setCategory(val as CategoryFilter)}
              className="w-full min-w-0 lg:w-auto"
            >
              <TabsList className="flex !h-auto w-full flex-wrap justify-start gap-1 bg-slate-200/70 p-1">
                {categoryTabs.map((tab) => (
                  <TabsTrigger
                    key={tab.key}
                    value={tab.key}
                    className="h-7 flex-none px-2.5 text-xs data-[state=active]:bg-white data-[state=active]:text-emerald-700"
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            <div className="flex w-full min-w-0 items-center gap-2 lg:w-auto">
              {!compact && (
                <div className="relative flex-1 sm:w-72 lg:flex-none">
                  <Search
                    className="pointer-events-none absolute top-1/2 left-2.5 h-3.5 w-3.5 -translate-y-1/2 text-slate-400"
                    aria-hidden="true"
                  />
                  <Input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={dict.portfolioSection.searchPlaceholder}
                    className="h-8 bg-white pl-8 text-xs"
                  />
                </div>
              )}

              {(query || category !== 'all') && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      type="button"
                      variant="outline"
                      size="icon-sm"
                      onClick={resetFilters}
                      aria-label={dict.portfolioSection.resetFilterTooltip}
                      className="bg-white"
                    >
                      <X className="h-3.5 w-3.5 text-slate-600" aria-hidden="true" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="text-xs">
                    {dict.portfolioSection.resetFilterTooltip}
                  </TooltipContent>
                </Tooltip>
              )}

              <div className="flex items-center rounded-md border border-slate-200 bg-white p-0.5">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      type="button"
                      variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
                      size="icon-xs"
                      onClick={() => setViewMode('grid')}
                      aria-label={dict.portfolioSection.viewModeGridTooltip}
                    >
                      <LayoutGrid className="h-3.5 w-3.5" aria-hidden="true" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="text-xs">
                    {dict.portfolioSection.viewModeGridTooltip}
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      type="button"
                      variant={viewMode === 'table' ? 'secondary' : 'ghost'}
                      size="icon-xs"
                      onClick={() => setViewMode('table')}
                      aria-label={dict.portfolioSection.viewModeTableTooltip}
                    >
                      <List className="h-3.5 w-3.5" aria-hidden="true" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="text-xs">
                    {dict.portfolioSection.viewModeTableTooltip}
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          </div>

          {displayedItems.length === 0 ? (
            <div className="mt-6 rounded-md border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
              <p className="text-sm text-slate-600">{dict.portfolioSection.emptyState}</p>
            </div>
          ) : viewMode === 'grid' ? (
            <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {displayedItems.map((item) => (
                <article
                  key={item.id}
                  className="group flex flex-col justify-between overflow-hidden rounded-md border border-slate-200 bg-white transition-colors hover:border-slate-300"
                >
                  <div>
                    <div className="aspect-video w-full overflow-hidden border-b border-slate-200 bg-slate-50">
                      <img
                        src={item.image}
                        alt={item.title[locale]}
                        width={1376}
                        height={768}
                        loading="eager"
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </div>

                    <div className="p-5">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-semibold text-emerald-700">
                          {item.solutionType[locale]}
                        </span>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              type="button"
                              variant="outline"
                              size="icon-xs"
                              onClick={() => setSelectedProject(item)}
                              aria-label={`${dict.portfolioSection.inspectTooltip}: ${item.title[locale]}`}
                            >
                              <Eye className="h-3.5 w-3.5 text-slate-600" aria-hidden="true" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent side="top" className="text-xs">
                            {dict.portfolioSection.inspectTooltip}
                          </TooltipContent>
                        </Tooltip>
                      </div>

                      <h3 className="mt-2 text-base font-semibold text-slate-900">
                        {item.title[locale]}
                      </h3>
                      <p className="mt-1 text-xs text-slate-500">
                        {item.clientSector[locale]}
                      </p>
                      <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                        {item.summary[locale]}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 bg-slate-50/70 px-5 py-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500">{item.metricsLabel[locale]}</span>
                      <span className="font-mono font-semibold text-emerald-700 tabular-nums">
                        {item.metricsValue}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-6 overflow-hidden rounded-md border border-slate-200 bg-white">
              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-50 hover:bg-slate-50">
                    <TableHead className="text-xs font-semibold text-slate-600">
                      {dict.portfolioSection.tableColumns.project}
                    </TableHead>
                    <TableHead className="hidden text-xs font-semibold text-slate-600 md:table-cell">
                      {dict.portfolioSection.tableColumns.sector}
                    </TableHead>
                    <TableHead className="hidden text-xs font-semibold text-slate-600 lg:table-cell">
                      {dict.portfolioSection.tableColumns.solution}
                    </TableHead>
                    <TableHead className="text-xs font-semibold text-slate-600">
                      {dict.portfolioSection.tableColumns.metric}
                    </TableHead>
                    <TableHead className="hidden text-xs font-semibold text-slate-600 sm:table-cell">
                      {dict.portfolioSection.tableColumns.status}
                    </TableHead>
                    <TableHead className="text-right text-xs font-semibold text-slate-600">
                      {dict.portfolioSection.tableColumns.action}
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {displayedItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium text-slate-900">
                        {item.title[locale]}
                      </TableCell>
                      <TableCell className="hidden text-xs text-slate-600 md:table-cell">
                        {item.clientSector[locale]}
                      </TableCell>
                      <TableCell className="hidden text-xs text-slate-600 lg:table-cell">
                        {item.solutionType[locale]}
                      </TableCell>
                      <TableCell className="font-mono text-xs font-semibold text-emerald-700 tabular-nums">
                        {item.metricsValue}
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        <Badge
                          variant="outline"
                          className="border-slate-200 bg-slate-50 font-sans text-[11px] text-slate-700"
                        >
                          {item.status[locale]}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              type="button"
                              variant="outline"
                              size="icon-xs"
                              onClick={() => setSelectedProject(item)}
                              aria-label={`${dict.portfolioSection.inspectTooltip}: ${item.title[locale]}`}
                            >
                              <Eye className="h-3.5 w-3.5 text-slate-600" aria-hidden="true" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent side="left" className="text-xs">
                            {dict.portfolioSection.inspectTooltip}
                          </TooltipContent>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>

        <Dialog
          open={Boolean(selectedProject)}
          onOpenChange={(open) => !open && setSelectedProject(null)}
        >
          {selectedProject && (
            <DialogContent className="border-slate-200 bg-white sm:max-w-xl">
              <DialogHeader>
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
                  <span>{selectedProject.solutionType[locale]}</span>
                  <span className="text-slate-300">·</span>
                  <span className="font-mono text-slate-500">{selectedProject.year}</span>
                </div>
                <DialogTitle className="mt-1 text-lg font-bold text-slate-900">
                  {selectedProject.title[locale]}
                </DialogTitle>
                <DialogDescription className="text-sm leading-relaxed text-slate-600">
                  {selectedProject.summary[locale]}
                </DialogDescription>
              </DialogHeader>

              <div className="aspect-video w-full overflow-hidden rounded-md border border-slate-200 bg-slate-50">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title[locale]}
                  width={1376}
                  height={768}
                  loading="eager"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="grid grid-cols-1 gap-3 rounded-md border border-slate-200 bg-slate-50 p-4 text-xs sm:grid-cols-3">
                <div>
                  <div className="text-[11px] text-slate-500">
                    {dict.portfolioSection.dialog.sectorLabel}
                  </div>
                  <div className="mt-1 font-medium text-slate-900">
                    {selectedProject.clientSector[locale]}
                  </div>
                </div>
                <div>
                  <div className="text-[11px] text-slate-500">
                    {dict.portfolioSection.dialog.solutionLabel}
                  </div>
                  <div className="mt-1 font-medium text-slate-900">
                    {selectedProject.solutionType[locale]}
                  </div>
                </div>
                <div>
                  <div className="text-[11px] text-slate-500">
                    {dict.portfolioSection.dialog.metricLabel}
                  </div>
                  <div className="mt-1 font-mono font-semibold text-emerald-700 tabular-nums">
                    {selectedProject.metricsValue}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold tracking-wider text-slate-900 uppercase">
                  {dict.portfolioSection.dialog.deliverablesLabel}
                </h4>
                <ul className="mt-2.5 space-y-2">
                  {selectedProject.deliverables[locale].map((deliverable) => (
                    <li key={deliverable} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600"
                        aria-hidden="true"
                      />
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold tracking-wider text-slate-900 uppercase">
                  {dict.portfolioSection.dialog.capabilitiesLabel}
                </h4>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {selectedProject.capabilities.map((cap) => (
                    <span
                      key={cap}
                      className="rounded-sm border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>

              <DialogFooter className="border-t border-slate-100 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setSelectedProject(null)}
                >
                  {dict.portfolioSection.dialog.closeLabel}
                </Button>
                <Button
                  asChild
                  className="bg-emerald-600 text-white hover:bg-emerald-700"
                >
                  <a href={`${contactUrl}?service=${selectedProject.category}`}>
                    <span>{dict.portfolioSection.dialog.inquireSimilar}</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </Button>
              </DialogFooter>
            </DialogContent>
          )}
        </Dialog>
      </section>
    </TooltipProvider>
  );
}
