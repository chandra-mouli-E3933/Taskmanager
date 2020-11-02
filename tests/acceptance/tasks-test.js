import { module, test } from 'qunit';
import { visit, currentURL, fillIn, click } from '@ember/test-helpers';
import { setupMirage } from "ember-cli-mirage/test-support";
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | tasks', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting tasks page', async function(assert) {
    
    //Tasks 
    this.server.createList('task', 5);
    await visit('/tasks');
    assert.equal(currentURL(), '/tasks', 'visited tasks page');
    assert.equal(document.querySelectorAll('a.taskItem').length, 5, 'checking get tasks')
    assert.equal(document.querySelectorAll('button.task-edit').length, 5)
    assert.equal(document.querySelectorAll('button.task-delete').length, 5)

    //create task
    await fillIn('input.add-input', 'newtask');
    await click('button.add-input-button');
    assert.equal(document.querySelectorAll("a.taskItem")[document.querySelectorAll("a.taskItem").length-1].textContent, 'newtask ', "Add task works good")


    //edit a task 
    await click(document.querySelectorAll("button.task-edit")[document.querySelectorAll("button.task-edit").length-1]);
    await visit('/tasks/6');
    assert.equal(currentURL(), '/tasks/6', 'visited task edit page');
    await fillIn('input.task-update', 'newtaskupdated');
    await click('button.task-update-button');
    await click('a.task-update-back-button');
    await visit('/tasks');
    assert.equal(document.querySelectorAll("a.taskItem")[document.querySelectorAll("a.taskItem").length-1].textContent, 'newtaskupdated ', "Edit task works good")

    //delete a task 
    await click(document.querySelectorAll("button.task-delete")[document.querySelectorAll("button.task-delete").length-1])
    assert.equal(document.querySelectorAll('a.taskItem').length, 5, 'Delete task sucessfull')

    //subtasks
    await click(document.querySelectorAll("a.taskItem")[0]);
    await visit('/tasks/1/subtasks');
    assert.equal(currentURL(), '/tasks/1/subtasks', 'visited subtask page');

    //create subtask 
    await fillIn('input.add-input', 'newsubtask');
    await click('button.add-input-button');
    assert.equal(document.querySelectorAll("a.subtaskItem")[0].textContent, 'newsubtask', "Add subtask works good")

    //edit a subtask 
    await click(document.querySelectorAll("button.subtask-edit")[0]);
    await visit('/tasks/1/subtasks/1');
    assert.equal(currentURL(), '/tasks/1/subtasks/1', 'visited subtask edit page');
    await fillIn('input.subtask-update', 'newsubtaskupdated');
    await click('button.subtask-update-button');
    await click('a.subtask-update-back-button');
    await visit('/tasks/1/subtasks');
    assert.equal(document.querySelectorAll("a.subtaskItem")[0].textContent, 'newsubtaskupdated', "Edit subtask works good")

    //delete subtask 
    await click(document.querySelectorAll("button.subtask-delete")[0])
    assert.equal(document.querySelectorAll('a.subtaskItem').length, 0, 'Delete task sucessfull')
  });
});
