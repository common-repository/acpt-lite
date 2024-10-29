<?php

use ACPT_Lite\Includes\ACPT_Lite_DB;
use ACPT_Lite\Includes\ACPT_Lite_Schema_Migration;

class CreateMetaFieldTableLiteMigration extends ACPT_Lite_Schema_Migration
{
	/**
	 * @return array
	 */
	public function up(): array
	{
		return [
			"CREATE TABLE IF NOT EXISTS `".ACPT_Lite_DB::TABLE_CUSTOM_POST_TYPE_FIELD."` (
	            id VARCHAR(36) UNIQUE NOT NULL,
	            meta_box_id VARCHAR(36) NOT NULL,
	            field_name VARCHAR(50) NOT NULL,
	            field_type VARCHAR(50) NOT NULL,
	            field_default_value VARCHAR(50) DEFAULT NULL,
	            field_description TEXT DEFAULT NULL,
	            showInArchive TINYINT(1) NOT NULL,
	            required TINYINT(1) NOT NULL,
	            sort INT(11),
	            PRIMARY KEY(id)
	        ) $this->charsetCollation;",
			$this->renameTableQuery(ACPT_Lite_DB::TABLE_CUSTOM_POST_TYPE_FIELD),
		];
	}

	/**
	 * @return array
	 */
	public function down(): array
	{
		return [
			$this->deleteTableQuery(ACPT_Lite_DB::TABLE_CUSTOM_POST_TYPE_FIELD),
			$this->deleteTableQuery(ACPT_Lite_DB::prefixedTableName(ACPT_Lite_DB::TABLE_CUSTOM_POST_TYPE_FIELD)),
		];
	}

	public function version(): string
	{
		return '1.0.17';
	}
}