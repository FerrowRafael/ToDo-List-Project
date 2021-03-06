<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable=[
        'name'
    ]; 

    // RELACIONES
    public function task()
    {
        return $this->hasMany('\App\Task');
    }
}
