## For client side rendering we can use `useSWR` hook and inside that hook we can pass fetcher function and the api 

### Fetcher function :- const fetcher = (...args) => fetch(...args).then((res) => res.json());

## For Server side rendering we can use `getServerSideProps` function inside this function we can use fetch to fetch the data from api 

## For static site generation we can use `getStaticProps` function inside this function we can fetch the data from api and if there are multiple users then we can create a static page for each user and creating static pages for different users we can use `getStaticProps` function  inside this function we can write the logic 

### static site generation >>> server side rendering >>> client side rendering 