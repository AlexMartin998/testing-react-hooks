import { useUser } from './hooks/useUser';

export const HomePage = () => {
  const { user } = useUser();

  return (
    <>
      <h1>
        HomePage <small>{user?.name}</small>
      </h1>
      <hr />

      <pre>{JSON.stringify(user, null, 3)}</pre>
    </>
  );
};
