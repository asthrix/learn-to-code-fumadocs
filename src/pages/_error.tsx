import type { NextPageContext } from "next";

interface ErrorProps {
   statusCode?: number;
}

function ErrorPage({ statusCode }: ErrorProps) {
   return (
      <main className='mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-4 px-4 text-center'>
         <h1 className='text-3xl font-semibold'>Something went wrong</h1>
         <p className='text-muted-foreground'>
            {statusCode
               ? `Server responded with status ${statusCode}.`
               : "An unexpected client error occurred."}
         </p>
      </main>
   );
}

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
   const statusCode = res?.statusCode ?? err?.statusCode ?? 404;
   return { statusCode };
};

export default ErrorPage;
