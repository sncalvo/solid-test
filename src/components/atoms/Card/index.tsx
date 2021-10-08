import Solid from 'solid-js';

interface Props {
  children: Solid.JSX.Element;
}

export const Card = ({ children }: Props): Solid.JSX.Element => (
  <div class="rounded bg-blue-900 text-white p-5 flex-col">{children}</div>
);
