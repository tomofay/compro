import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Eye,
  LayoutGrid,
  List,
  Search,
  X,
} from 'lucide-react';
import { RevealBlock } from '@/components/common/MotionPrimitives';
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  SHOWCASE_ITEMS,
  type ShowcaseCategory,
  type ShowcaseItem,
} from '@/data/showcase';
import { getDictionary, getLocalizedPath, type Locale } from '@/i18n';
import { cn } from '@/lib/utils';

interface ShowcaseExplorerProps {
  locale: Locale;
  compact?: boolean;
}

type CategoryFilter = 'all' | ShowcaseCategory;

export function ShowcaseExplorer({
  locale,
  compact = false,
}: ShowcaseExplorerProps) {
  const dict = getDictionary(locale);
  const s = dict.showcaseSection;
  const [category, setCategory] = useState<CategoryFilter>('all');
  const [query, setQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [selectedItem, setSelectedItem] = useState<ShowcaseItem | null>(null);

  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SHOWCASE_ITEMS.filter((item) => {
      const matchesCategory = category === 'all' || item.category === category;
      if (!matchesCategory) return false;
      if (!q) return true;
      return (
        item.title[locale].toLowerCase().includes(q) ||
        item.sector[locale].toLowerCase().includes(q) ||
        item.solutionType[locale].toLowerCase().includes(q) ||
        item.summary[locale].toLowerCase().includes(q) ||
        item.capabilities.some((cap) => cap.toLowerCase().includes(q))
      );
    });
  }, [category, query, locale]);

  const displayedItems = compact ? filteredItems.slice(0, 3) : filteredItems;
  const showcaseUrl = getLocalizedPath(locale, 'showcase');
  const contactUrl = getLocalizedPath(locale, 'contact');

  const categoryTabs: { key: CategoryFilter; label: string }[] = [
    { key: 'all', label: s.categories.all },
    { key: 'compro', label: s.categories.compro },
    { key: 'landing', label: s.categories.landing },
    { key: 'store', label: s.categories.store },
    { key: 'software', label: s.categories.software },
    { key: 'mobile', label: s.categories.mobile },
  ];

  function resetFilters() {
    setCategory('all');
    setQuery('');
  }

  return (
    <TooltipProvider delayDuration={120}>
      <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <RevealBlock className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="font-mono text-xs font-semibold tracking-wider text-indigo-600 uppercase">
                {s.eyebrow}
              </p>
              <h2 className="font-heading mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                {s.title}
              </h2>
              <p className="mt-2 text-sm text-slate-600 sm:text-base">
                {s.subtitle}
              </p>
            </div>

            {compact && (
              <a
                href={showcaseUrl}
                className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-700"
              >
                <span>{s.viewAllLink}</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
          </RevealBlock>

          <div className="mt-7 flex flex-col justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-2.5 lg:flex-row lg:items-center">
            <div
              role="tablist"
              data-showcase="showcase-filters"
              aria-label={s.eyebrow}
              className="flex flex-wrap gap-1 rounded-xl bg-slate-100 p-1"
            >
              {categoryTabs.map((tab) => {
                const isSelected = category === tab.key;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setCategory(tab.key)}
                    className={cn(
                      'relative rounded-lg px-3 py-1.5 text-xs font-medium transition-colors',
                      isSelected
                        ? 'font-semibold text-white'
                        : 'text-slate-600 hover:text-slate-900'
                    )}
                  >
                    {isSelected && (
                      <motion.span
                        layoutId="showcase-filter-pill"
                        transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                        className="absolute inset-0 rounded-lg bg-indigo-600"
                      />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex w-full min-w-0 items-center gap-2 lg:w-auto">
              {!compact && (
                <div className="relative flex-1 sm:w-64 lg:flex-none">
                  <Search
                    className="pointer-events-none absolute top-1/2 left-2.5 h-3.5 w-3.5 -translate-y-1/2 text-slate-400"
                    aria-hidden="true"
                  />
                  <Input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={s.searchPlaceholder}
                    className="h-8.5 rounded-lg border-slate-200 bg-white pl-8 text-xs"
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
                      aria-label={s.resetFilterTooltip}
                      className="rounded-lg border-slate-200 bg-white"
                    >
                      <X className="h-3.5 w-3.5 text-slate-600" aria-hidden="true" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="text-xs">
                    {s.resetFilterTooltip}
                  </TooltipContent>
                </Tooltip>
              )}

              <div className="flex items-center rounded-lg border border-slate-200 bg-slate-50 p-0.5">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      type="button"
                      variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
                      size="icon-xs"
                      onClick={() => setViewMode('grid')}
                      aria-label={s.viewModeGridTooltip}
                    >
                      <LayoutGrid className="h-3.5 w-3.5" aria-hidden="true" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="text-xs">
                    {s.viewModeGridTooltip}
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      type="button"
                      variant={viewMode === 'table' ? 'secondary' : 'ghost'}
                      size="icon-xs"
                      onClick={() => setViewMode('table')}
                      aria-label={s.viewModeTableTooltip}
                    >
                      <List className="h-3.5 w-3.5" aria-hidden="true" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="text-xs">
                    {s.viewModeTableTooltip}
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          </div>

          {displayedItems.length === 0 ? (
            <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
              <p className="text-sm text-slate-600">{s.emptyState}</p>
            </div>
          ) : viewMode === 'grid' ? (
            <motion.div
              layout
              className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
            >
              <AnimatePresence mode="popLayout">
                {displayedItems.map((item) => {
                  const isClient = item.kind === 'client';
                  return (
                    <motion.article
                      key={item.id}
                      layout
                      initial={{ opacity: 0, scale: 0.96, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.96, y: -8 }}
                      transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                      className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-indigo-300"
                    >
                      <div>
                        <div className="aspect-video w-full overflow-hidden border-b border-slate-200 bg-slate-100">
                          <img
                            src={item.image}
                            alt={item.title[locale]}
                            width={1376}
                            height={768}
                            loading="eager"
                            className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                          />
                        </div>

                        <div className="p-5">
                          <div className="flex items-center justify-between gap-2">
                            <Badge
                              variant="outline"
                              className={cn(
                                'font-mono text-[11px]',
                                isClient
                                  ? 'border-indigo-100 bg-indigo-50 font-semibold text-indigo-700'
                                  : 'border-slate-200 bg-slate-50 font-medium text-slate-600'
                              )}
                            >
                              {item.status[locale]}
                            </Badge>

                            <div className="flex items-center gap-1.5">
                              {item.liveUrl && (
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button
                                      asChild
                                      variant="outline"
                                      size="icon-xs"
                                      className="rounded-lg border-slate-200 hover:border-indigo-300"
                                    >
                                      <a
                                        href={item.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${s.visitLiveTooltip}: ${item.title[locale]}`}
                                      >
                                        <ExternalLink
                                          className="h-3.5 w-3.5 text-indigo-600"
                                          aria-hidden="true"
                                        />
                                      </a>
                                    </Button>
                                  </TooltipTrigger>
                                  <TooltipContent side="top" className="text-xs">
                                    {s.visitLiveTooltip}
                                  </TooltipContent>
                                </Tooltip>
                              )}

                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    type="button"
                                    variant="outline"
                                    size="icon-xs"
                                    onClick={() => setSelectedItem(item)}
                                    aria-label={`${s.inspectTooltip}: ${item.title[locale]}`}
                                    className="rounded-lg border-slate-200 hover:border-indigo-300"
                                  >
                                    <Eye className="h-3.5 w-3.5 text-slate-600" aria-hidden="true" />
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent side="top" className="text-xs">
                                  {s.inspectTooltip}
                                </TooltipContent>
                              </Tooltip>
                            </div>
                          </div>

                          <p className="mt-3 text-xs font-semibold text-indigo-600">
                            {item.solutionType[locale]}
                          </p>
                          <h3 className="font-heading mt-1 text-base font-semibold text-slate-900">
                            {item.title[locale]}
                          </h3>
                          <p className="mt-1 text-xs font-medium text-slate-500">
                            {item.sector[locale]}
                          </p>
                          <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-600">
                            {item.summary[locale]}
                          </p>

                          <div className="mt-3.5 flex flex-wrap gap-1.5">
                            {item.capabilities.slice(0, 3).map((cap) => (
                              <span
                                key={cap}
                                className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 font-mono text-[11px] font-medium text-slate-600"
                              >
                                {cap}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <Table>
                <TableHeader>
                  <TableRow className="border-slate-200 bg-slate-50 hover:bg-slate-50">
                    <TableHead className="text-xs font-semibold text-slate-600">
                      {s.tableColumns.project}
                    </TableHead>
                    <TableHead className="hidden text-xs font-semibold text-slate-600 md:table-cell">
                      {s.tableColumns.sector}
                    </TableHead>
                    <TableHead className="hidden text-xs font-semibold text-slate-600 lg:table-cell">
                      {s.tableColumns.solution}
                    </TableHead>
                    <TableHead className="hidden text-xs font-semibold text-slate-600 sm:table-cell">
                      {s.tableColumns.status}
                    </TableHead>
                    <TableHead className="text-right text-xs font-semibold text-slate-600">
                      {s.tableColumns.action}
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {displayedItems.map((item) => {
                    const isClient = item.kind === 'client';
                    return (
                      <TableRow key={item.id} className="border-slate-200">
                        <TableCell className="font-medium text-slate-900">
                          {item.title[locale]}
                        </TableCell>
                        <TableCell className="hidden text-xs text-slate-600 md:table-cell">
                          {item.sector[locale]}
                        </TableCell>
                        <TableCell className="hidden text-xs text-slate-600 lg:table-cell">
                          {item.solutionType[locale]}
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                          <Badge
                            variant="outline"
                            className={cn(
                              'font-mono text-[11px]',
                              isClient
                                ? 'border-indigo-100 bg-indigo-50 font-semibold text-indigo-700'
                                : 'border-slate-200 bg-slate-50 text-slate-700'
                            )}
                          >
                            {item.status[locale]}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="inline-flex items-center justify-end gap-1.5">
                            {item.liveUrl && (
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    asChild
                                    variant="outline"
                                    size="icon-xs"
                                    className="border-slate-200 hover:border-indigo-300"
                                  >
                                    <a
                                      href={item.liveUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      aria-label={`${s.visitLiveTooltip}: ${item.title[locale]}`}
                                    >
                                      <ExternalLink
                                        className="h-3.5 w-3.5 text-indigo-600"
                                        aria-hidden="true"
                                      />
                                    </a>
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent side="left" className="text-xs">
                                  {s.visitLiveTooltip}
                                </TooltipContent>
                              </Tooltip>
                            )}

                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  type="button"
                                  variant="outline"
                                  size="icon-xs"
                                  onClick={() => setSelectedItem(item)}
                                  aria-label={`${s.inspectTooltip}: ${item.title[locale]}`}
                                  className="border-slate-200 hover:border-indigo-300"
                                >
                                  <Eye className="h-3.5 w-3.5 text-slate-600" aria-hidden="true" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent side="left" className="text-xs">
                                {s.inspectTooltip}
                              </TooltipContent>
                            </Tooltip>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          )}
        </div>

        <Dialog
          open={Boolean(selectedItem)}
          onOpenChange={(open) => !open && setSelectedItem(null)}
        >
          {selectedItem && (
            <DialogContent className="rounded-2xl border-slate-200 bg-white sm:max-w-xl">
              <DialogHeader>
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-indigo-600">
                  <span>{selectedItem.solutionType[locale]}</span>
                  <span className="text-slate-300">·</span>
                  <span className="font-mono text-slate-500">{selectedItem.id}</span>
                  <Badge
                    variant="outline"
                    className={cn(
                      'font-mono text-[11px]',
                      selectedItem.kind === 'client'
                        ? 'border-indigo-100 bg-indigo-50 font-semibold text-indigo-700'
                        : 'border-slate-200 bg-slate-50 font-medium text-slate-600'
                    )}
                  >
                    {selectedItem.status[locale]}
                  </Badge>
                </div>
                <DialogTitle className="font-heading mt-1 text-lg font-bold text-slate-900">
                  {selectedItem.title[locale]}
                </DialogTitle>
                <DialogDescription className="text-sm text-slate-600">
                  {selectedItem.summary[locale]}
                </DialogDescription>
              </DialogHeader>

              <div className="aspect-video w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title[locale]}
                  width={1376}
                  height={768}
                  loading="eager"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <div className="grid grid-cols-1 gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs sm:grid-cols-2">
                <div>
                  <div className="text-[11px] text-slate-500">
                    {s.dialog.sectorLabel}
                  </div>
                  <div className="mt-1 font-medium text-slate-900">
                    {selectedItem.sector[locale]}
                  </div>
                </div>
                <div>
                  <div className="text-[11px] text-slate-500">
                    {s.dialog.solutionLabel}
                  </div>
                  <div className="mt-1 font-medium text-slate-900">
                    {selectedItem.solutionType[locale]}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold tracking-wider text-slate-900 uppercase">
                  {s.dialog.deliverablesLabel}
                </h4>
                <ul className="mt-2.5 space-y-2">
                  {selectedItem.deliverables[locale].map((deliverable) => (
                    <li key={deliverable} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600"
                        aria-hidden="true"
                      />
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold tracking-wider text-slate-900 uppercase">
                  {s.dialog.capabilitiesLabel}
                </h4>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {selectedItem.capabilities.map((cap) => (
                    <span
                      key={cap}
                      className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-xs font-medium text-slate-700"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>

              <DialogFooter className="flex-wrap gap-2 border-t border-slate-100 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setSelectedItem(null)}
                  className="rounded-lg border-slate-200"
                >
                  {s.dialog.closeLabel}
                </Button>
                {selectedItem.liveUrl && (
                  <Button asChild variant="outline" className="rounded-lg border-slate-200">
                    <a
                      href={selectedItem.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>{s.dialog.visitLiveSite}</span>
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </Button>
                )}
                <Button
                  asChild
                  className="rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
                >
                  <a href={`${contactUrl}?service=${selectedItem.category}`}>
                    <span>{s.dialog.inquireSimilar}</span>
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

