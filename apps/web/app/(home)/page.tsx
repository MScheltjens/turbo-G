// import { Montserrat } from 'next/font/google';

import { getAllUsers } from '@/server/home.server';

// const RobotoMono = Montserrat({
//   subsets: ['latin'],
//   display: 'swap',
//   weight: ['900'],
// });

export default async function Page() {
  const { data } = await getAllUsers();

  return (
    <section className="bg-background min-h-dvh flex flex-col justify-center items-center">
      Hello world
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </section>
  );
}
