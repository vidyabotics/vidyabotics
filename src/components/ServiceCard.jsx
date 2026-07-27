import { School, Briefcase, Sun, User, Cpu, Users, Check } from "lucide-react";

const iconMap = {
  school: School,
  briefcase: Briefcase,
  sun: Sun,
  user: User,
  cpu: Cpu,
  users: Users,
};

export default function ServiceCard({ service }) {
  const Icon = iconMap[service.icon] || Cpu;

  return (
    <div className="flex flex-col rounded-2xl border border-border-soft bg-surface p-7 transition-colors duration-300 hover:border-accent/40">
      <div className="flex items-center justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
          <Icon size={20} />
        </span>
        <span className="font-mono text-[11px] uppercase tracking-wide text-muted">
          {service.audience}
        </span>
      </div>

      <h3 className="mt-5 font-display text-lg font-semibold text-text">
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {service.shortDescription}
      </p>

      <ul className="mt-5 space-y-2">
        {service.details.map((d, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-muted">
            <Check size={15} className="mt-0.5 shrink-0 text-accent" />
            {d}
          </li>
        ))}
      </ul>
    </div>
  );
}
