
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const initialNodes = [
  {
    id: '1',
    position: { x: 350, y: 0 },
    data: { label: 'Arrays & Hashing' },
    className: 'glass px-4 py-2 rounded-lg text-sm',
  },
  {
    id: '2',
    position: { x: 250, y: 100 },
    data: { label: 'Two Pointers' },
    className: 'glass px-4 py-2 rounded-lg text-sm',
  },
  {
    id: '3',
    position: { x: 450, y: 100 },
    data: { label: 'Stack' },
    className: 'glass px-4 py-2 rounded-lg text-sm',
  },
  {
    id: '4',
    position: { x: 150, y: 200 },
    data: { label: 'Binary Search' },
    className: 'glass px-4 py-2 rounded-lg text-sm',
  },
  {
    id: '5',
    position: { x: 300, y: 200 },
    data: { label: 'Sliding Window' },
    className: 'glass px-4 py-2 rounded-lg text-sm',
  },
  {
    id: '6',
    position: { x: 450, y: 200 },
    data: { label: 'Linked List' },
    className: 'glass px-4 py-2 rounded-lg text-sm',
  },
  {
    id: '7',
    position: { x: 350, y: 300 },
    data: { label: 'Trees' },
    className: 'glass px-4 py-2 rounded-lg text-sm',
  },
  {
    id: '8',
    position: { x: 150, y: 400 },
    data: { label: 'Tries' },
    className: 'glass px-4 py-2 rounded-lg text-sm',
  },
  {
    id: '9',
    position: { x: 550, y: 400 },
    data: { label: 'Backtracking' },
    className: 'glass px-4 py-2 rounded-lg text-sm',
  },
  {
    id: '10',
    position: { x: 250, y: 500 },
    data: { label: 'Heap / Priority Queue' },
    className: 'glass px-4 py-2 rounded-lg text-sm',
  },
  {
    id: '11',
    position: { x: 450, y: 500 },
    data: { label: 'Graphs' },
    className: 'glass px-4 py-2 rounded-lg text-sm',
  },
  {
    id: '12',
    position: { x: 650, y: 500 },
    data: { label: '1-D DP' },
    className: 'glass px-4 py-2 rounded-lg text-sm',
  },
  {
    id: '13',
    position: { x: 150, y: 600 },
    data: { label: 'Intervals' },
    className: 'glass px-4 py-2 rounded-lg text-sm',
  },
  {
    id: '14',
    position: { x: 300, y: 600 },
    data: { label: 'Greedy' },
    className: 'glass px-4 py-2 rounded-lg text-sm',
  },
  {
    id: '15',
    position: { x: 450, y: 600 },
    data: { label: 'Advanced Graphs' },
    className: 'glass px-4 py-2 rounded-lg text-sm',
  },
  {
    id: '16',
    position: { x: 550, y: 600 },
    data: { label: '2-D DP' },
    className: 'glass px-4 py-2 rounded-lg text-sm',
  },
  {
    id: '17',
    position: { x: 700, y: 600 },
    data: { label: 'Bit Manipulation' },
    className: 'glass px-4 py-2 rounded-lg text-sm',
  },
  {
    id: '18',
    position: { x: 600, y: 700 },
    data: { label: 'Math & Geometry' },
    className: 'glass px-4 py-2 rounded-lg text-sm',
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-3', source: '1', target: '3' },
  { id: 'e2-4', source: '2', target: '4' },
  { id: 'e2-5', source: '2', target: '5' },
  { id: 'e3-6', source: '3', target: '6' },
  { id: 'e4-7', source: '4', target: '7' },
  { id: 'e5-7', source: '5', target: '7' },
  { id: 'e6-7', source: '6', target: '7' },
  { id: 'e7-8', source: '7', target: '8' },
  { id: 'e7-9', source: '7', target: '9' },
  { id: 'e7-10', source: '7', target: '10' },
  { id: 'e9-11', source: '9', target: '11' },
  { id: 'e9-12', source: '9', target: '12' },
  { id: 'e10-13', source: '10', target: '13' },
  { id: 'e10-14', source: '10', target: '14' },
  { id: 'e11-15', source: '11', target: '15' },
  { id: 'e11-16', source: '11', target: '16' },
  { id: 'e12-17', source: '12', target: '17' },
  { id: 'e16-18', source: '16', target: '18' },
  { id: 'e17-18', source: '17', target: '18' },
];

export const AlgorithmsFlow = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div style={{ width: '100%', height: '800px' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        attributionPosition="bottom-right"
        className="bg-background"
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
};
