<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable=[
        'name',
        'description',
        'status_id',
        'priority_id',
        'category_id'
    ];    

    // RELACIONES
    // public function user()
    // {
    //    return $this->belongsTo('\App\User');
    // }
}
