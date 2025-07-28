import LinkBtn from '@/components/LinkBtn/LinkBtn';
import UserCard from '@/components/UserCard/UserCard';
import { User } from '@/types';
import { revalidateTag } from 'next/cache';

// by default - server component
const UsersServerVersion = async () => {
  const res = await fetch('https://api.escuelajs.co/api/v1/users', {
    headers: { 'Api-Key': 'asdasda.asdasd.asdasdasd9123adsmkkasd' },
    next: { tags: ['users'] },
  });

  // кэширование с фетч - только на серверных компонентах
  //1.  cache: "force-cache" - кэширование по умолчанию- при билде кэшировали данные
  // и дальше они не обновляются
  // - статические страницы

  //2. cache: "no-store" - не использует кэширование

  //3. Revalidate вариант
  // next: { revalidate: 60 }, - запросит обновление страницы каждые 60 сек
  // новости, курсы валют, продукты

  //4. Ручное обновление
  // next: { tags: ["users"] }, внутри фетча
  // чтобы вызвать обновление мы можем
  // revalidateTag("users");

  // ключ в серверном компоненте не будет "слит". Клиент его не видит
  if (!res.ok) {
    throw new Error('Fetch users failed');
  }
  const users = await res.json();
  //   console.log(users); // выведет на сервере

  return (
    <ul className="w-full flex flex-wrap gap-20 justify-center py-20 px-10 bg-[#f5f4fa] dark:bg-background">
      {users.map((user: User) => (
        <li key={user.id}>
          <UserCard user={user} url={`/users/server-version/${user.id}`} />
        </li>
      ))}
    </ul>
  );
};

export default UsersServerVersion;
