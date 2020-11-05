import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
module('Integration | Component | add-task', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    await render(hbs`<AddTask />`);

    assert.equal(this.element.textContent.trim(), '');

  });

  test('Block renders', async function(assert) {
    await render(hbs`
      <AddTask>Add Task</AddTask>
    `);

    assert.equal(this.element.textContent.trim(), 'Add Task', 'Yielding works fine');

  });
});
