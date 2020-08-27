<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tasks')->insert([
            [
                'name' => 'Prueba seed 1',
                'description' =>'Description Prueba seed 1',
                'status_id' => 3,
                'priority' => 1,
                'category_id' => 7,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Prueba seed 2',
                'description' =>'Description Prueba seed 2',
                'status_id' => 2,
                'priority' => 6,
                'category_id' => 2,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ]);
    }
}
