import { module, test } from 'qunit';
import { visit, currentURL, fillIn, click } from '@ember/test-helpers';
import { setupMirage } from "ember-cli-mirage/test-support";
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | tasks', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('Fetching tasks page', async function(assert) {

    this.server.createList('task', 5);
    await visit('/tasks');
    assert.equal(currentURL(), '/tasks', 'visited tasks page');
    assert.equal(document.querySelectorAll('a.taskItem').length, 5, 'checking get tasks')
    assert.equal(document.querySelectorAll('button.task-edit').length, 5)
    assert.equal(document.querySelectorAll('button.task-delete').length, 5)
  });
      
    

  test('Adding task', async function(assert) {

    this.server.createList('task', 5);
    await visit('/tasks');
    await fillIn('input.add-input', 'newtask');
    await click('button.add-input-button');
    assert.equal(document.querySelectorAll("a.taskItem")[document.querySelectorAll("a.taskItem").length-1].textContent, 'newtask ', "Add task works good")
   });

   test('Editing task', async function(assert) {

    this.server.createList('task', 5);
    await visit('/tasks');
    await click(document.querySelectorAll("button.task-edit")[0]);
    await visit('/tasks/1');
    assert.equal(currentURL(), '/tasks/1', 'visited task edit page');
    await fillIn('input.task-update', 'newtaskupdated');
    await click('button.task-update-button');
    await visit('/tasks');
    assert.equal(document.querySelectorAll("a.taskItem")[0].textContent, 'newtaskupdated ', "Edit task works good")
   });



   test('Deleting task', async function(assert) {

    this.server.createList('task', 6);
    await visit('/tasks');
    await click(document.querySelectorAll("button.task-delete")[document.querySelectorAll("button.task-delete").length-1])
    assert.equal(document.querySelectorAll('a.taskItem').length, 5, 'Delete task sucessfull')
   });

   test('Fetching subtask', async function(assert) {

    this.server.createList('task', 5);
    await visit('/tasks');
    await click(document.querySelectorAll("a.taskItem")[0]);
    await visit('/tasks/1/subtasks');
    assert.equal(currentURL(), '/tasks/1/subtasks', 'visited subtask page');
   });

   test('Adding subtask', async function(assert) {

    this.server.createList('task', 5);
    await visit('/tasks');
    await visit('/tasks/1/subtasks');
    await fillIn('input.add-input', 'newsubtask');
    await click('button.add-input-button');
    assert.equal(document.querySelectorAll("a.subtaskItem")[0].textContent, 'newsubtask', "Add subtask works good")
   });

   test('Editing subtask', async function(assert) {

    this.server.createList('task', 5);
    await visit('/tasks');
    await visit('/tasks/1/subtasks');
    await fillIn('input.add-input', 'newsubtask');
    await click('button.add-input-button');

    await click(document.querySelectorAll("button.subtask-edit")[0]);
    await visit('/tasks/1/subtasks/1');
    assert.equal(currentURL(), '/tasks/1/subtasks/1', 'visited subtask edit page');
    await fillIn('input.subtask-update', 'newsubtaskupdated');
    await click('button.subtask-update-button');
    await visit('/tasks/1/subtasks');
    assert.equal(document.querySelectorAll("a.subtaskItem")[0].textContent, 'newsubtaskupdated', "Edit subtask works good")

   });

   test('Deleting subtask', async function(assert) {
     
    this.server.createList('task', 5);
    await visit('/tasks');
    await visit('/tasks/1/subtasks');
    await fillIn('input.add-input', 'newsubtask');
    await click('button.add-input-button');
    await click(document.querySelectorAll("button.subtask-delete")[0])
    assert.equal(document.querySelectorAll('a.subtaskItem').length, 0, 'Delete task sucessfull')
  });
});
