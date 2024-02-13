import { Skeleton } from '@/app/components';
import { Box } from '@radix-ui/themes';

function LoadingNewIssuePage() {
  return (
    <Box>
      <Skeleton />
      <Skeleton height="20rem" />
    </Box>
  );
}

export default LoadingNewIssuePage;
