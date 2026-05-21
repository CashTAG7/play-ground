interface ErrorComponentProps {
  error: unknown;
}

const ErrorComponent = ({ error }: ErrorComponentProps) => {
  const errorMessage = error instanceof Error ? error.message : String(error);

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-y-4">
      <h1 className="font-semibold text-3xl">Something went wrong</h1>
      <p className="text-red-500">{errorMessage}</p>
    </div>
  );
};

export default ErrorComponent;
