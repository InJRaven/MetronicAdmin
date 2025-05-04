import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Kiểm tra xem trang hiện tại đã ở đầu chưa, nếu chưa thì cuộn lên đầu
    if (window.scrollY !== 0) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
};

export default ScrollToTop;
