import { Component, For, JSX } from 'solid-js';

import { Button, Card, Tag } from '@atoms';

const TestCard = (): JSX.Element => (
  <Card>
    <div class="text-xl">Card title</div>
    <div class="flex space-x-4 flex-wrap my-2">
      <Tag label="Test 1" />
      <Tag label="Test 1" color="red" />
      <Tag label="Test 1" color="gray" />
    </div>
    <Button onClick={() => alert('You clicked me')}>Press me</Button>
  </Card>
);

const App: Component = () => (
  <div class="grid grid-cols-4 gap-5">
    <For each={[1, 2, 3]}>{TestCard}</For>
  </div>
);

export default App;
