<?php

namespace App\Console\Commands;

use App\Models\Breed;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

class BreedsCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:breeds';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'this is command for get breeds';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        try {
            DB::beginTransaction();
            $json = Http::get('https://api.thecatapi.com/v1/breeds')->json();
            
            foreach ($json as $item) {
                Breed::create([
                    'name' => $item['name'],
                    'description' => $item['description'],
                    'origin' => json_encode($item['origin']),
                    'temperament' => json_encode($item['temperament']),
                    'life_span' => json_encode($item['life_span']),
                    'weight' => json_encode($item['weight']),
                    'image' => $item['image']['url'] ?? '',
                ]);
            }
            DB::commit();
        } catch (\Throwable $th) {
            DB::rollBack();
            throw $th;
        }
    }
}
