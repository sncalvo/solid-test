import Solid from 'solid-js';

interface Props {
  label: string;
  color?: 'red' | 'green' | 'blue' | 'gray' | 'indigo';
}

export const Tag = ({ label, color = 'indigo' }: Props): Solid.JSX.Element => (
  <div class={`p-2 bg-${color}-700 rounded`}>{label}</div>
);
