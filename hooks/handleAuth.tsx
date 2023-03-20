import { useQuery } from 'react-query';

import { fetchAuthUser } from 'api/auth';
import { useAuthStore } from 'stores/AuthStore';

export const handleAuth = () => {
  const { setUser, user } = useAuthStore();
  const { refetch } = useQuery('me', fetchAuthUser, { enabled: false });

  const fetchMe = async () => {
    const { data }: any = await refetch();
    setUser(data.data);
  };

  return { fetchMe, user };
};
