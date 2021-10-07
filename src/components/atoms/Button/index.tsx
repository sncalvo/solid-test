import Solid from 'solid-js';
import './index.css';

interface Props extends Solid.JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  disabled?: boolean;
}

export const Button = ({
  variant = 'primary',
  disabled = false,
  ...rest
}: Props): Solid.JSX.Element => (
  <button
    class={`${variant} p-4 border rounded`}
    classList={{ 'opacity-50': disabled }}
    {...rest}
  />
);
