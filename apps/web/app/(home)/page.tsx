import { formatDate } from '@repo/utils';

export default function Page() {
  return (
    <section className="min-h-dvh flex flex-col justify-center items-center">
      Hello world
      <span>{formatDate(new Date())}</span>
    </section>
  );
}
