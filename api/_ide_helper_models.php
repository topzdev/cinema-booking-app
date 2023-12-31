<?php

// @formatter:off
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App\Models{
/**
 * App\Models\Booking
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int $theater_id
 * @property int $schedule_time_id
 * @property int $user_id
 * @property string|null $deleted_at
 * @method static \Illuminate\Database\Eloquent\Builder|Booking newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Booking newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Booking query()
 * @method static \Illuminate\Database\Eloquent\Builder|Booking whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Booking whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Booking whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Booking whereScheduleTimeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Booking whereTheaterId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Booking whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Booking whereUserId($value)
 */
	class Booking extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\BookingSeats
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int $booking_id
 * @property int $theater_seat_id
 * @property string|null $deleted_at
 * @method static \Illuminate\Database\Eloquent\Builder|BookingSeats newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|BookingSeats newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|BookingSeats query()
 * @method static \Illuminate\Database\Eloquent\Builder|BookingSeats whereBookingId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BookingSeats whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BookingSeats whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BookingSeats whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BookingSeats whereTheaterSeatId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BookingSeats whereUpdatedAt($value)
 */
	class BookingSeats extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Cinema
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string $name
 * @property string $address
 * @property string $description
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @method static \Illuminate\Database\Eloquent\Builder|Cinema newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Cinema newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Cinema onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Cinema query()
 * @method static \Illuminate\Database\Eloquent\Builder|Cinema whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cinema whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cinema whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cinema whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cinema whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cinema whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cinema whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cinema withTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Cinema withoutTrashed()
 */
	class Cinema extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Image
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string $public_id
 * @property int $height
 * @property int $width
 * @property int $size
 * @property string $url
 * @property string $extension
 * @property string $type
 * @method static \Illuminate\Database\Eloquent\Builder|Image newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Image newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Image query()
 * @method static \Illuminate\Database\Eloquent\Builder|Image whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Image whereExtension($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Image whereHeight($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Image whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Image wherePublicId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Image whereSize($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Image whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Image whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Image whereUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Image whereWidth($value)
 */
	class Image extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Movie
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string $title
 * @property string $tmdb_id
 * @property int $runtime
 * @property string|null $description
 * @property string|null $trailer_yt_id
 * @property int $rated_type_id
 * @property int $poster_id
 * @property int $cover_id
 * @property string|null $deleted_at
 * @property-read \App\Models\Image|null $cover
 * @property-read \App\Models\Image|null $poster
 * @property-read \App\Models\RatedType|null $rated_type
 * @method static \Database\Factories\MovieFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Movie newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Movie newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Movie query()
 * @method static \Illuminate\Database\Eloquent\Builder|Movie whereCoverId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Movie whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Movie whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Movie whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Movie whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Movie wherePosterId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Movie whereRatedTypeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Movie whereRuntime($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Movie whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Movie whereTmdbId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Movie whereTrailerYtId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Movie whereUpdatedAt($value)
 */
	class Movie extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\RatedType
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string $name
 * @property string|null $deleted_at
 * @method static \Database\Factories\RatedTypeFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|RatedType newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|RatedType newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|RatedType query()
 * @method static \Illuminate\Database\Eloquent\Builder|RatedType whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|RatedType whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|RatedType whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|RatedType whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|RatedType whereUpdatedAt($value)
 */
	class RatedType extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Schedule
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string $date
 * @property int $theater_id
 * @property int $movie_id
 * @property string|null $deleted_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\ScheduleTime> $schedule_time
 * @property-read int|null $schedule_time_count
 * @method static \Illuminate\Database\Eloquent\Builder|Schedule newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Schedule newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Schedule query()
 * @method static \Illuminate\Database\Eloquent\Builder|Schedule whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Schedule whereDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Schedule whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Schedule whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Schedule whereMovieId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Schedule whereTheaterId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Schedule whereUpdatedAt($value)
 */
	class Schedule extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\ScheduleTime
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string $time
 * @property int $schedule_id
 * @property string|null $deleted_at
 * @method static \Illuminate\Database\Eloquent\Builder|ScheduleTime newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ScheduleTime newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ScheduleTime query()
 * @method static \Illuminate\Database\Eloquent\Builder|ScheduleTime whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ScheduleTime whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ScheduleTime whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ScheduleTime whereScheduleId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ScheduleTime whereTime($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ScheduleTime whereUpdatedAt($value)
 */
	class ScheduleTime extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\SeatType
 *
 * @property int $id
 * @property string $name
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string|null $deleted_at
 * @method static \Database\Factories\SeatTypeFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|SeatType newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|SeatType newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|SeatType query()
 * @method static \Illuminate\Database\Eloquent\Builder|SeatType whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SeatType whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SeatType whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SeatType whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SeatType whereUpdatedAt($value)
 */
	class SeatType extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Theater
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property string $name
 * @property string $description
 * @property int $row
 * @property int $column
 * @property int $cinema_id
 * @property int $theater_type_id
 * @property-read \App\Models\Cinema|null $cinema
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\TheaterSeat> $theaterSeats
 * @property-read int|null $theater_seats_count
 * @property-read \App\Models\TheaterType|null $theater_type
 * @method static \Database\Factories\TheaterFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Theater newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Theater newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Theater onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Theater query()
 * @method static \Illuminate\Database\Eloquent\Builder|Theater whereCinemaId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Theater whereColumn($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Theater whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Theater whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Theater whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Theater whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Theater whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Theater whereRow($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Theater whereTheaterTypeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Theater whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Theater withTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Theater withoutTrashed()
 */
	class Theater extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\TheaterLayout
 *
 * @method static \Illuminate\Database\Eloquent\Builder|TheaterLayout newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|TheaterLayout newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|TheaterLayout query()
 */
	class TheaterLayout extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\TheaterSeat
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int $x
 * @property int $y
 * @property string $name
 * @property int $theater_id
 * @property int $seat_type_id
 * @property string|null $deleted_at
 * @property-read \App\Models\SeatType|null $seat_type
 * @property-read \App\Models\Theater|null $theaters
 * @method static \Illuminate\Database\Eloquent\Builder|TheaterSeat newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|TheaterSeat newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|TheaterSeat query()
 * @method static \Illuminate\Database\Eloquent\Builder|TheaterSeat whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TheaterSeat whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TheaterSeat whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TheaterSeat whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TheaterSeat whereSeatTypeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TheaterSeat whereTheaterId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TheaterSeat whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TheaterSeat whereX($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TheaterSeat whereY($value)
 */
	class TheaterSeat extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\TheaterType
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string $title
 * @property string $description
 * @property string|null $deleted_at
 * @method static \Database\Factories\TheaterTypeFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|TheaterType newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|TheaterType newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|TheaterType query()
 * @method static \Illuminate\Database\Eloquent\Builder|TheaterType whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TheaterType whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TheaterType whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TheaterType whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TheaterType whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TheaterType whereUpdatedAt($value)
 */
	class TheaterType extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\User
 *
 * @property int $id
 * @property string $first_name
 * @property string $last_name
 * @property string $phone
 * @property string $email
 * @property \Illuminate\Support\Carbon|null $email_verified_at
 * @property mixed $password
 * @property string|null $remember_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string|null $deleted_at
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection<int, \Illuminate\Notifications\DatabaseNotification> $notifications
 * @property-read int|null $notifications_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \Laravel\Sanctum\PersonalAccessToken> $tokens
 * @property-read int|null $tokens_count
 * @method static \Database\Factories\UserFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User query()
 * @method static \Illuminate\Database\Eloquent\Builder|User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmailVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereFirstName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereLastName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereUpdatedAt($value)
 */
	class User extends \Eloquent {}
}

