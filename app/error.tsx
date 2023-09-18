"use client";

interface Props {
  error: Error;
  reset: () => void;
}

const UnXErrorPage = ({ error, reset }: Props) => {
  return (
    <>
      <h1>An Unexpected Error has occurred</h1>
      <button className="btn btn-secondary" onClick={reset}>
        Retry
      </button>
    </>
  );
};

export default UnXErrorPage;
