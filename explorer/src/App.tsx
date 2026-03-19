import { ReactFlowProvider } from '@xyflow/react';
import Explorer from './components/Explorer';

export default function App() {
  return (
    <ReactFlowProvider>
      <Explorer />
    </ReactFlowProvider>
  );
}
