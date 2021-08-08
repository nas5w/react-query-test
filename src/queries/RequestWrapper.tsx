import { Suspense } from "react";
import { RequestErrorBoundary } from "./RequestErrorBoundary";

export const RequestWrapper: React.FC = ({ children }) => (
  <RequestErrorBoundary>
    <Suspense fallback={<>Loading</>}>{children}</Suspense>
  </RequestErrorBoundary>
);
