## Docker + Laravel6系 ＋ React + ts

### command

 build
 `sudo docker-compose build`

build error: https://github.com/docker/compose/issues/8449 
- ハイフン付きの `sudo docker-compose build` でうまくいったような気がするが `docker pull mysql/mysql-server:8.0` でpullしてきたほうが通るかも

 起動

- `sudo docker-compose up -d`

 ステータス確認

- `docker-compose ps`

 コンテナの中に入る

- `docker compose exec app bash`
- `docker compose exec db bash`

 migration

- `php artisan migrate`
- `php artisan migrate --seed`

 migration状況確認

- `php artisan migrate:status`

キャッシュ削除

- `php artisan cache:clear`
- `php artisan config:clear`

 コンテナリビルド

- `docker-compose --no-cache`

### 環境構築参考
- 絶対に失敗しないDockerでLaravel + Vue.jsの開発環境（LEMP環境）を構築する方法〜MacOS Intel Chip対応〜
  - repository: https://github.com/shimotaroo/docker-laravel-vuejs-sample
  - https://yutaro-blog.net/2021/04/28/docker-laravel-vuejs-intel-1/
  - https://yutaro-blog.net/2021/04/30/docker-laravel-vuejs-2/
  - https://yutaro-blog.net/2021/04/30/docker-laravel-vuejs-3/
- 【環境構築】LaravelでReactとTypescriptを使う方法
  - https://qiita.com/mineaki27th/items/ad774a41b7a0a68761bd
- 初めてのLaravel6.xとReact入門
  - https://reffect.co.jp/laravel/laravel6-react-router
