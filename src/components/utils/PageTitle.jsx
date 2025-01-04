import { Helmet, HelmetProvider } from 'react-helmet-async';

function PageTitle({ title }) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </HelmetProvider>
  );
}

export default PageTitle;
