<?php

namespace App\Http\Controllers;

use App\Task;
use App\Category;
use App\Status;
use App\Priority;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Eloquent\Collection;

class TaskController extends Controller
{
    // GET ALL TASKS
    public function getAllTasks(){ 
        $tasks = Task::with('status', 'category', 'priority')->get();
        return $tasks;;
    }

    // TASK BY TASK ID
    public function getOneTask($id){ 
        $task = Task::with('status', 'category', 'priority')->find($id);
        return $task;
    }
    
    // ADD TASK
    public function addTask(Request $request){
        try {
            $body = $request->validate([
                'name' => 'required|string',
                'description' => 'required|string',
                'status_id' => 'nullable',
                'priority_id' => 'nullable',
                'category_id' => 'nullable'
            ]);
            $task = Task::create($body);
        } catch (\Exception $e) {
            return response($e,500);
        }
        return response($task, 201);
    }

    // UPDATE TASK
    public function updateTask(Request $request, $id){
        try {
        $task = Task::find($id);
            $task->update($request->all());
            return $task;
            return response([
                'message' => 'Task modificado correctamente'
            ], 200);
        
        } 
        catch (\Exception $e) {
            return response([$e,'message' => 'Wrong Credentials']);
        }
    }

    // DELETE TASK
    public function deleteTask($id){
        try {
        $task = Task::find($id)->delete();
        return response([
            'message' => 'Borrado correctamente'
        ], 200);
        } 
        catch (\Exception $e) {
            return response([$e,'message' => 'Wrong Credentials']);
        }      
    }

    
}
