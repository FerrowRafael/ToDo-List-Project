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
    public function status()
    {
       return $this->belongsTo('\App\Status');
    }
    public function priority()
    {
       return $this->belongsTo('\App\Priority');
    }   
    public function category()
    {
       return $this->belongsTo('\App\Category');
    }   
}
