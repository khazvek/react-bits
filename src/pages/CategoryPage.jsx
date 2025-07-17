import { useEffect, useRef, Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';
import { componentMap } from '../constants/Components';
import { decodeLabel } from '../utils/utils';
import { Box } from '@chakra-ui/react';
import { useTransition } from '../hooks/useTransition';
import BackToTopButton from '../components/common/Misc/BackToTopButton';
import SkeletonLoader from '../components/common/Misc/SkeletonLoader';

const CategoryPage = () => {
  const { subcategory } = useParams();
  const { transitionPhase, getPreloadedComponent } = useTransition();

  const scrollRef = useRef(null);
  const decodedLabel = decodeLabel(subcategory);
  const isLoading = transitionPhase === 'loading';
  const opacity = ['fade-out', 'loading'].includes(transitionPhase) ? 0 : 1;

  const SubcategoryComponent = getPreloadedComponent(subcategory)?.default || (subcategory ? lazy(componentMap[subcategory]) : null);

  useEffect(() => {
    if (scrollRef.current && transitionPhase !== 'fade-out') {
      scrollRef.current.scrollTo(0, 0);
    }
  }, [subcategory, transitionPhase]);

  return (
    <Box className={`category-page ${isLoading ? 'loading' : ''}`} ref={scrollRef}>
      <title>{`KauryUI - ${decodedLabel}`}</title>

      <Box className="page-transition-fade" style={{ opacity }}>
        <h2 className='sub-category'>{decodedLabel}</h2>

        {isLoading
          ? <SkeletonLoader />
          : <Suspense fallback={<SkeletonLoader />}><SubcategoryComponent /></Suspense>
        }
      </Box>
      <BackToTopButton />
    </Box>
  );
};

export default CategoryPage;
