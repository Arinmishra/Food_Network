import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="text-3xl block mx-auto py-72 w-fit h-screen">
      <h1 className="font-bold mb-4">Oops!!🥲 Something Went Wrong🤔...</h1>
      <p>{err?.error?.name + " : " + err?.error?.message}</p>
      <h3>{err?.status + " " + err?.statusText}</h3>
    </div>
  );
};

export default Error;
