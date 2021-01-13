<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function chart()
    {
        return DB::table('blogs')
            ->selectRaw("DATE_FORMAT(created_at, '%Y-%m-%d') as date, count(*) as number")
            ->groupBy('date')
            ->get();
    }
}
