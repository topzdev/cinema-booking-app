<?php


namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use function bcrypt;
use function response;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $page = $request->input('page', 1);
        $perPage = $request->input('per_page', 5);
        $q = $request->input('q', '');

        return response()->json(User::where(function ($query) use ($q) {
            $query->orWhere('email', 'ILIKE', "%$q%")
                ->orWhere('first_name', 'ILIKE', "%$q%")
                ->orWhere('last_name', 'ILIKE', "%$q%");
        })->paginate($perPage, ['*'], 'page', $page));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $fields = $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email',
        ]);
        // temporary password
        $fields['password'] = bcrypt($fields['last_name']);

        $user = User::create($fields);

        return response()->json($user);
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        return response()->json($user);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {

        $fields = $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
        ]);

        return response()->json($user->update($fields));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        return response()->json($user->delete());
    }

    /**
     * Reset user password.
     */
    public function resetPassword(User $user)
    {
        $fields['password'] = bcrypt($user->last_name);
        return response()->json($user->update($fields));
    }
}
