<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Cloudinary;
use Illuminate\Http\Request;

class ImageUploadController extends Controller
{
    public function upload(string $folder, string $file, int $imageId = null): Image|bool
    {
        $uploadedImage = Cloudinary::upload($file, [
            "folder" => '/sinefy/' . $folder
        ]);

        $fields = [
            'public_id' => $uploadedImage->getPublicId(),
            'height' => $uploadedImage->getHeight(),
            'width' => $uploadedImage->getWidth(),
            'size' => $uploadedImage->getSize(),
            'url' => $uploadedImage->getSecurePath(),
            'extension' => $uploadedImage->getExtension(),
            'type' => $folder
        ];

        if (isset($imageId)) {
            $image = Image::findOrFail($imageId);
            Cloudinary::destroy($image->public_id);
            return $image->update($fields);
        }

        return Image::create($fields);
    }
}
