<?php

namespace App\Http\Controllers;

use App\Task;
use App\Category;
use App\Status;
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
        $tasks = Task::with('status', 'category')->get();
        return $tasks;;
    }

    // TASK BY TASK ID
    public function getOneTask($id){ 

        $task = Task::with('user', 'category', 'comment.user', 'likes')->find($id);
        return $task;
    }
    
    // ADD TASK
    public function addTask(Request $request){
        try {
            $body = $request->validate([
                'name' => 'required|string',
                'description' => 'required|string',
                'status_id' => 'required',
                'priority'=>'required|string',
                'category_id' => 'required',
            ]);
            $task = Task::create($body);
        } catch (\Exception $e) {
            return response($e,500);
        }
        return response($task, 201);
    }

    // UPDATE TASK
    public function updateTask(Request $request, $id){
        $task = Task::find($id);
        if (Auth::id() === $task->user_id){
            
            $task->update($request->all());
            return $task;
            // return response([
            //     'message' => 'Task modificado correctamente'
            // ], 200);
            
        }
        return response([
            'message' => 'Wrong Credentials'
        ], 400,);
        return $task;
    }

    // DELETE TASK
    public function deleteTask($id){
        $task = Task::find($id);
        if (Auth::id() !== $task->user_id){
            return response([
                'message' => 'Wrong Credentials'
            ], 400);
        }
        // $task->delete();
        return response([
            'message' => 'Borrado correctamente'
        ], 200);
    }

    
}
