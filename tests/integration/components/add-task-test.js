import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | add-task', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<AddTask />`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      <AddTask>Add Task</AddTask>
    `);

    assert.equal(this.element.textContent.trim(), 'Add Task', 'Yielding works fine');


    await render(hbs`
      <AddTask></AddTask>
    `);
    await fillIn('input.add-input', 'newtask');
    await click('button.add-input-button');

  });
});
