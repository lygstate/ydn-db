// This file was autogenerated by calcdeps.py
goog.addDependency("../../../ydn-db/js/con.js", [], ['ydn.db', 'ydn.db.con.Storage', 'goog.async.Deferred']);
goog.addDependency("../../../ydn-db/js/core.js", [], ['ydn.db.core.Storage', 'ydn.db.core.TxStorage']);
goog.addDependency("../../../ydn-db/js/dev.js", [], ['ydn.debug']);
goog.addDependency("../../../ydn-db/js/main.js", [], ['ydn.db.Storage', 'ydn.db.sql', 'ydn.db.TxStorage', 'ydn.db.algo.NestedLoop']);
goog.addDependency("../../../ydn-db/js/test.js", [], ['ydn.db.Storage', 'goog.debug.Console']);
goog.addDependency("../../../ydn-db/js/tr.js", [], ['ydn.db.tr.Storage', 'ydn.db.tr.TxStorage']);
goog.addDependency("../../../ydn-db/js/ydn/db/i_storage.js", ['ydn.db.IStorage'], ['ydn.db.index.IStorage']);
goog.addDependency("../../../ydn-db/js/ydn/db/rich_storage.js", ['ydn.db.RichStorage_'], ['goog.storage.EncryptedStorage', 'goog.storage.ExpiringStorage']);
goog.addDependency("../../../ydn-db/js/ydn/db/storage.js", ['ydn.db.Storage'], ['goog.userAgent.product', 'ydn.async', 'ydn.object', 'ydn.db.RichStorage_', 'ydn.db.index.Storage', 'ydn.db.TxStorage', 'ydn.db.IStorage']);
goog.addDependency("../../../ydn-db/js/ydn/db/tx_storage.js", ['ydn.db.TxStorage'], ['ydn.db.index.TxStorage', 'ydn.db.core.req.IndexedDb', 'ydn.db.core.req.SimpleStore', 'ydn.db.core.req.WebSql', 'ydn.db.algo', 'ydn.error.NotSupportedException']);
goog.addDependency("../../../ydn-db/js/ydn/db/algo/algo.js", ['ydn.db.algo'], ['ydn.error.ArgumentException']);
goog.addDependency("../../../ydn-db/js/ydn/db/algo/join/abstract_solver.js", ['ydn.db.algo.AbstractSolver'], ['goog.debug.Logger', 'ydn.db.Streamer']);
goog.addDependency("../../../ydn-db/js/ydn/db/algo/join/nested_loop.js", ['ydn.db.algo.NestedLoop'], ['ydn.db.algo.AbstractSolver']);
goog.addDependency("../../../ydn-db/js/ydn/db/base/base.js", ['ydn.db.base'], ['goog.async.Deferred']);
goog.addDependency("../../../ydn-db/js/ydn/db/base/db.js", ['ydn.db'], ['ydn.db.con.IndexedDb']);
goog.addDependency("../../../ydn-db/js/ydn/db/base/editable_schema.js", ['ydn.db.schema.EditableDatabase'], ['ydn.db.schema.Database']);
goog.addDependency("../../../ydn-db/js/ydn/db/base/error.js", ['ydn.db.InternalError', 'ydn.db.InvalidKeyException', 'ydn.db.InvalidStateError', 'ydn.db.NotFoundError', 'ydn.db.ScopeError', 'ydn.db.SecurityError'], []);
goog.addDependency("../../../ydn-db/js/ydn/db/base/key.js", ['ydn.db.Key'], []);
goog.addDependency("../../../ydn-db/js/ydn/db/base/key_range.js", ['ydn.db.IDBKeyRange', 'ydn.db.KeyRange'], []);
goog.addDependency("../../../ydn-db/js/ydn/db/base/schema.js", ['ydn.db.schema.DataType', 'ydn.db.schema.Database', 'ydn.db.schema.Index', 'ydn.db.schema.Store'], ['ydn.db.base', 'ydn.db.Key', 'ydn.db.utils']);
goog.addDependency("../../../ydn-db/js/ydn/db/base/storage_event.js", ['ydn.db.events.ObjectStoreEvent', 'ydn.db.events.StorageEvent', 'ydn.db.events.Types'], []);
goog.addDependency("../../../ydn-db/js/ydn/db/base/utils.js", ['ydn.db.utils'], []);
goog.addDependency("../../../ydn-db/js/ydn/db/base/where.js", ['ydn.db.Where'], ['ydn.db.KeyRange', 'goog.string']);
goog.addDependency("../../../ydn-db/js/ydn/db/con/html5_storage.js", ['ydn.db.con.LocalStorage', 'ydn.db.con.SessionStorage'], ['ydn.db.con.SimpleStorage']);
goog.addDependency("../../../ydn-db/js/ydn/db/con/i_cursor_stream.js", ['ydn.db.con.ICursorStream'], []);
goog.addDependency("../../../ydn-db/js/ydn/db/con/i_database.js", ['ydn.db.con.IDatabase'], ['goog.async.Deferred']);
goog.addDependency("../../../ydn-db/js/ydn/db/con/i_storage.js", ['ydn.db.con.IStorage'], ['goog.async.Deferred']);
goog.addDependency("../../../ydn-db/js/ydn/db/con/idb_cursor_stream.js", ['ydn.db.con.IdbCursorStream'], ['goog.debug.Logger', 'ydn.db.con.ICursorStream', 'ydn.db.con.IStorage']);
goog.addDependency("../../../ydn-db/js/ydn/db/con/indexed_db.js", ['ydn.db.con.IndexedDb'], ['goog.Timer', 'goog.async.DeferredList', 'goog.debug.Error', 'goog.events', 'ydn.async', 'ydn.db.base', 'ydn.db.con.IDatabase', 'ydn.db.schema.Database', 'ydn.json']);
goog.addDependency("../../../ydn-db/js/ydn/db/con/memory_storage.js", ['ydn.db.req.InMemoryStorage'], []);
goog.addDependency("../../../ydn-db/js/ydn/db/con/simple_storage.js", ['ydn.db.con.SimpleStorage'], ['goog.Timer', 'goog.asserts', 'goog.async.Deferred', 'ydn.db.Key', 'ydn.db.con.IDatabase', 'ydn.db.req.InMemoryStorage']);
goog.addDependency("../../../ydn-db/js/ydn/db/con/storage.js", ['ydn.db.con.Storage'], ['goog.events.EventTarget', 'goog.userAgent.product', 'ydn.async', 'ydn.db.con.IStorage', 'ydn.db.con.IndexedDb', 'ydn.db.con.LocalStorage', 'ydn.db.con.SessionStorage', 'ydn.db.con.SimpleStorage', 'ydn.db.con.WebSql', 'ydn.db.events.StorageEvent', 'ydn.db.schema.EditableDatabase', 'ydn.error.ArgumentException', 'ydn.object', 'ydn.db.con.IdbCursorStream']);
goog.addDependency("../../../ydn-db/js/ydn/db/con/websql.js", ['ydn.db.con.WebSql'], ['goog.async.Deferred', 'goog.debug.Logger', 'goog.events', 'goog.functions', 'ydn.async', 'ydn.db.SecurityError', 'ydn.db.base', 'ydn.db.con.IDatabase', 'ydn.json', 'ydn.string']);
goog.addDependency("../../../ydn-db/js/ydn/db/core/i_storage.js", ['ydn.db.core.IStorage'], ['ydn.db.req.RequestExecutor', 'ydn.db.KeyRange']);
goog.addDependency("../../../ydn-db/js/ydn/db/core/i_value_cursor.js", ['ydn.db.IValueCursor'], ['ydn.db.ICursor']);
goog.addDependency("../../../ydn-db/js/ydn/db/core/icursor.js", ['ydn.db.ICursor'], []);
goog.addDependency("../../../ydn-db/js/ydn/db/core/idb_cursor.js", ['ydn.db.IDBCursor'], ['ydn.db.ICursor']);
goog.addDependency("../../../ydn-db/js/ydn/db/core/idb_value_cursor.js", ['ydn.db.IDBValueCursor'], ['ydn.db.IValueCursor']);
goog.addDependency("../../../ydn-db/js/ydn/db/core/storage.js", ['ydn.db.core.Storage'], ['goog.userAgent.product', 'ydn.async', 'ydn.db.core.IStorage', 'ydn.db.core.TxStorage', 'ydn.db.tr.Storage', 'ydn.object']);
goog.addDependency("../../../ydn-db/js/ydn/db/core/tx_storage.js", ['ydn.db.core.TxStorage'], ['ydn.db.core.req.IndexedDb', 'ydn.db.core.req.SimpleStore', 'ydn.db.core.req.WebSql', 'ydn.db.tr.TxStorage', 'ydn.error.NotSupportedException']);
goog.addDependency("../../../ydn-db/js/ydn/db/core/websql_cursor.js", ['ydn.db.WebsqlCursor'], ['ydn.db.IValueCursor']);
goog.addDependency("../../../ydn-db/js/ydn/db/core/req/i_request_executor.js", ['ydn.db.core.req.IRequestExecutor'], []);
goog.addDependency("../../../ydn-db/js/ydn/db/core/req/indexed_db.js", ['ydn.db.core.req.IndexedDb'], ['goog.async.DeferredList', 'ydn.db.core.req.IRequestExecutor', 'ydn.db.req.RequestExecutor', 'ydn.error', 'ydn.json']);
goog.addDependency("../../../ydn-db/js/ydn/db/core/req/request_executor.js", ['ydn.db.req.RequestExecutor'], ['goog.async.Deferred', 'goog.debug.Logger', 'ydn.db.InternalError', 'ydn.db.Key']);
goog.addDependency("../../../ydn-db/js/ydn/db/core/req/simple_store.js", ['ydn.db.core.req.SimpleStore'], ['goog.Timer', 'goog.asserts', 'goog.async.Deferred', 'ydn.db.req.RequestExecutor', 'ydn.db.core.req.IRequestExecutor']);
goog.addDependency("../../../ydn-db/js/ydn/db/core/req/websql.js", ['ydn.db.core.req.WebSql'], ['goog.async.Deferred', 'goog.debug.Logger', 'goog.events', 'ydn.async', 'ydn.db.req.RequestExecutor', 'ydn.json', 'ydn.db.Where', 'ydn.db.core.req.IRequestExecutor']);
goog.addDependency("../../../ydn-db/js/ydn/db/index/i_storage.js", ['ydn.db.index.IStorage'], ['ydn.db.index.req.IRequestExecutor', 'ydn.db.core.IStorage']);
goog.addDependency("../../../ydn-db/js/ydn/db/index/iterator.js", ['ydn.db.Iterator'], ['goog.functions', 'ydn.db.KeyRange', 'ydn.db.Where', 'ydn.db.base', 'ydn.error.ArgumentException']);
goog.addDependency("../../../ydn-db/js/ydn/db/index/storage.js", ['ydn.db.index.Storage'], ['ydn.db.index.TxStorage', 'ydn.db.core.Storage']);
goog.addDependency("../../../ydn-db/js/ydn/db/index/streamer.js", ['ydn.db.Streamer'], ['ydn.db.con.IdbCursorStream', 'ydn.db.con.IStorage', 'ydn.db.Iterator']);
goog.addDependency("../../../ydn-db/js/ydn/db/index/tx_storage.js", ['ydn.db.index.TxStorage'], ['ydn.db.Iterator', 'ydn.db.core.TxStorage', 'ydn.db.index.req.IRequestExecutor', 'ydn.db.index.req.IndexedDb', 'ydn.db.index.req.WebSql', 'ydn.db.index.req.SimpleStore']);
goog.addDependency("../../../ydn-db/js/ydn/db/index/req/i_request_executor.js", ['ydn.db.index.req.IRequestExecutor'], ['ydn.db.core.req.IRequestExecutor', 'ydn.db.Streamer']);
goog.addDependency("../../../ydn-db/js/ydn/db/index/req/idb_query.js", ['ydn.db.req.IdbQuery'], ['ydn.db.req.IterableQuery', 'goog.functions', 'ydn.db.KeyRange', 'ydn.db.Where', 'ydn.error.ArgumentException']);
goog.addDependency("../../../ydn-db/js/ydn/db/index/req/indexed_db.js", ['ydn.db.index.req.IndexedDb'], ['ydn.db.core.req.IndexedDb', 'ydn.db.index.req.IRequestExecutor', 'ydn.db.algo.AbstractSolver', 'ydn.db.IDBCursor', 'ydn.db.IDBValueCursor', 'ydn.db.req.IdbQuery', 'ydn.error', 'ydn.json']);
goog.addDependency("../../../ydn-db/js/ydn/db/index/req/iterable_query.js", ['ydn.db.req.IterableQuery'], ['ydn.db.Iterator', 'goog.functions', 'ydn.db.KeyRange', 'ydn.db.Where', 'ydn.error.ArgumentException']);
goog.addDependency("../../../ydn-db/js/ydn/db/index/req/simple_store.js", ['ydn.db.index.req.SimpleStore'], ['ydn.db.core.req.SimpleStore', 'ydn.db.index.req.IRequestExecutor']);
goog.addDependency("../../../ydn-db/js/ydn/db/index/req/sql_query.js", ['ydn.db.req.SqlQuery'], ['ydn.db.req.IterableQuery', 'goog.functions', 'ydn.db.KeyRange', 'ydn.db.Where', 'ydn.error.ArgumentException']);
goog.addDependency("../../../ydn-db/js/ydn/db/index/req/websql.js", ['ydn.db.index.req.WebSql'], ['goog.async.Deferred', 'goog.debug.Logger', 'goog.events', 'ydn.async', 'ydn.db.core.req.WebSql', 'ydn.db.WebsqlCursor', 'ydn.json', 'ydn.db.req.SqlQuery', 'ydn.db.index.req.IRequestExecutor']);
goog.addDependency("../../../ydn-db/js/ydn/db/sql/sql.js", ['ydn.db.Sql'], ['goog.functions', 'ydn.db.KeyRange', 'ydn.db.schema.Database', 'ydn.error.ArgumentException', 'ydn.math.Expression', 'ydn.string']);
goog.addDependency("../../../ydn-db/js/ydn/db/sql/storage.js", ['ydn.db.sql'], ['ydn.db.Sql']);
goog.addDependency("../../../ydn-db/js/ydn/db/tr/i_storage.js", ['ydn.db.tr.IStorage'], ['ydn.db.tr.Mutex']);
goog.addDependency("../../../ydn-db/js/ydn/db/tr/mutex.js", ['ydn.db.tr.Mutex'], ['goog.array', 'goog.asserts', 'ydn.db.InvalidStateError']);
goog.addDependency("../../../ydn-db/js/ydn/db/tr/storage.js", ['ydn.db.tr.Storage'], ['ydn.db.con.Storage', 'ydn.db.tr.IStorage', 'ydn.db.tr.TxStorage']);
goog.addDependency("../../../ydn-db/js/ydn/db/tr/tx_storage.js", ['ydn.db.tr.TxStorage'], ['ydn.db.con.IStorage', 'ydn.error.NotSupportedException']);
goog.addDependency("../../../ydn-db/js/ydn/db/utils/test_utils.js", ['ydn.db.test'], ['ydn.db.io.QueryService']);
