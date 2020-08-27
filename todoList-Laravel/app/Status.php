<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Status extends Model
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
