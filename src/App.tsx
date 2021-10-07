import type { Component } from 'solid-js';

import { Button } from '@atoms';

const App: Component = () => (
  <div class="p-10 bg-blue">
    <Button onClick={() => alert('You clicked me')}>Press me</Button>
  </div>
);

export default App;
