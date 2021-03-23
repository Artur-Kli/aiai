import {MigrationInterface, QueryRunner} from "typeorm"

/*
  add init user
  username: admin
  email: admin@example.com
  password: root - забираем захэшированный пароль из https://www.browserling.com/tools/bcrypt
*/

export class User1616495127121 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
        INSERT INTO users (username, email, password)
        VALUES ('admin', 'admin@example.com', '$2a$10$y1AXy7jMKVgDQzx5sPYi3eSgzagMLocmzRjlmwNfa1YSkdBS9jxjS')
      `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`
        DELETE FROM users WHERE username = 'admin'
      `)
    }

}
