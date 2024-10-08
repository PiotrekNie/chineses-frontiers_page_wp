<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInitdb0c8ce6caf76689ddefd0d9ab3cc8bc
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        require __DIR__ . '/platform_check.php';

        spl_autoload_register(array('ComposerAutoloaderInitdb0c8ce6caf76689ddefd0d9ab3cc8bc', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInitdb0c8ce6caf76689ddefd0d9ab3cc8bc', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInitdb0c8ce6caf76689ddefd0d9ab3cc8bc::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}
