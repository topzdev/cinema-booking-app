<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Cloudinary;
use Illuminate\Http\Request;
use phpDocumentor\Reflection\Types\Integer;
use function var_dump;

class ImageUploadController extends Controller
{
    public function upload(string $folder, string $file, Integer $oldImageId = null): Image
    {

        if (isset($oldImageId)) {
            $oldImage = Image::find($oldImageId);
            Cloudinary::destroy($oldImage->cld_public_id);
            $oldImage->delete();
        }

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
        ];

        return Image::create($fields);
    }
}
