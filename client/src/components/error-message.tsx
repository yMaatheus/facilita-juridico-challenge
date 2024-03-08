type ErrorMessageProps = {
  error?: string[];
}

export function ErrorMessage({ error }: ErrorMessageProps) {
  return <>{error && <p className="text-red-500 text-sm">{error[0]}</p>}</>;
}
