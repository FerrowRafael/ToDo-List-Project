<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// TASK
Route::prefix('tasks')->group(function () {
    Route::post('/', 'TaskController@getAllTasks');         // 1 ALL TASKS
    Route::post('/{id}', 'TaskController@getOneTask');      // 2 ONE TASK
    Route::get('/', 'TaskController@addTask');              // 3 ADD TASK
    Route::get('/{id}', 'TaskController@updateTask');       // 4 UPDATE TASK    
    Route::get('/{id}', 'TaskController@deleteTask');       // 5 DELETE TASK
    
});
