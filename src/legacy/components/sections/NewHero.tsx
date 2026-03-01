import { Button } from "@/legacy/components/ui/Button";

export function NewHero() {
  return (
    <section className="px-4 py-16 md:py-24 bg-sky-50">
      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2 md:items-center">
        <div className="space-y-4">
          <p className="text-sm font-semibold text-sky-700 tracking-wide">
            FISIOTERAPIA BRUNO
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            Farti tornare in forma è la nostra missione.
          </h1>
          <p className="text-slate-600">
            Percorsi personalizzati di fisioterapia, riabilitazione e prevenzione per tornare a muoverti senza dolore.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button variant="primary">Scopri il team</Button>
            <Button variant="secondary">Chiama ora</Button>
          </div>
        </div>
        <div className="h-48 md:h-64 rounded-3xl bg-sky-200" />
      </div>
    </section>
  );
}
