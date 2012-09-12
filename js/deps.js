// This file was autogenerated by calcdeps.py
goog.addDependency("../../../ydn-db/js/main.js", [], ['goog.debug.Console', 'goog.debug.LogManager', 'ydn.db.core.Storage', 'ydn.db.tr.Core', 'ydn.db.Storage', 'ydn.db.tr.Storage', 'ydn.db.test']);
goog.addDependency("../../../ydn-db/js/ydn/db/i_storage.js", ['ydn.db.IStorage'], ['ydn.db.tr.IStorage', 'ydn.db.req.AbstractRequestExecutor']);
goog.addDependency("../../../ydn-db/js/ydn/db/rich_storage.js", ['ydn.db.RichStorage_'], ['goog.storage.ExpiringStorage', 'goog.storage.EncryptedStorage']);
goog.addDependency("../../../ydn-db/js/ydn/db/storage.js", ['ydn.db.Storage'], ['goog.userAgent.product', 'ydn.async', 'ydn.db.req.IndexedDb', 'ydn.db.req.SimpleStore', 'ydn.db.req.WebSql', 'ydn.object', 'ydn.db.RichStorage_', 'ydn.db.tr.Storage', 'ydn.db.TxStorage', 'ydn.db.IStorage', 'ydn.db.io.QueryService', 'ydn.db.io.QueryServiceProvider']);
goog.addDependency("../../../ydn-db/js/ydn/db/tx_storage.js", ['ydn.db.TxStorage'], ['ydn.error.NotSupportedException']);
goog.addDependency("../../../ydn-db/js/ydn/db/adapter/html5_storage.js", ['ydn.db.adapter.LocalStorage', 'ydn.db.adapter.SessionStorage'], ['ydn.db.adapter.SimpleStorage']);
goog.addDependency("../../../ydn-db/js/ydn/db/adapter/indexed_db.js", ['ydn.db.adapter.IndexedDb'], ['goog.Timer', 'goog.async.DeferredList', 'goog.debug.Error', 'goog.events', 'ydn.async', 'ydn.db', 'ydn.db.DatabaseSchema', 'ydn.db.adapter.IDatabase', 'ydn.json']);
goog.addDependency("../../../ydn-db/js/ydn/db/adapter/i_database.js", ['ydn.db.adapter.IDatabase'], ['goog.async.Deferred']);
goog.addDependency("../../../ydn-db/js/ydn/db/adapter/simple_storage.js", ['ydn.db.adapter.SimpleStorage'], ['goog.asserts', 'goog.async.Deferred', 'goog.Timer', 'ydn.db.Key', 'ydn.db.adapter.IDatabase']);
goog.addDependency("../../../ydn-db/js/ydn/db/adapter/websql.js", ['ydn.db.adapter.WebSql'], ['goog.async.Deferred', 'goog.debug.Logger', 'goog.events', 'ydn.async', 'ydn.json', 'ydn.db', 'ydn.db.adapter.IDatabase']);
goog.addDependency("../../../ydn-db/js/ydn/db/base/db.js", ['ydn.db'], ['goog.async.Deferred']);
goog.addDependency("../../../ydn-db/js/ydn/db/base/error.js", ['ydn.db.ValidKeyException', 'ydn.db.InvalidStateError', 'ydn.db.InternalError', 'ydn.db.ScopeError', 'ydn.db.NotFoundError'], []);
goog.addDependency("../../../ydn-db/js/ydn/db/base/key.js", ['ydn.db.Key'], []);
goog.addDependency("../../../ydn-db/js/ydn/db/base/key_range_impl.js", ['ydn.db.KeyRangeJson', 'ydn.db.KeyRange', 'ydn.db.KeyRangeImpl'], []);
goog.addDependency("../../../ydn-db/js/ydn/db/base/query.js", ['ydn.db.Query'], ['goog.functions', 'ydn.db.KeyRangeImpl']);
goog.addDependency("../../../ydn-db/js/ydn/db/base/schema.js", ['ydn.db.DataType', 'ydn.db.DatabaseSchema', 'ydn.db.IndexSchema', 'ydn.db.StoreSchema'], []);
goog.addDependency("../../../ydn-db/js/ydn/db/core/i_storage.js", ['ydn.db.core.IStorage'], ['goog.async.Deferred']);
goog.addDependency("../../../ydn-db/js/ydn/db/core/storage.js", ['ydn.db.core.Storage'], ['goog.userAgent.product', 'ydn.async', 'ydn.db.adapter.LocalStorage', 'ydn.db.adapter.SessionStorage', 'ydn.db.adapter.IndexedDb', 'ydn.db.adapter.SimpleStorage', 'ydn.db.adapter.WebSql', 'ydn.object', 'ydn.error.ArgumentException', 'ydn.db.core.IStorage']);
goog.addDependency("../../../ydn-db/js/ydn/db/io/query_service.js", ['ydn.db.io.QueryService', 'ydn.db.io.QueryServiceProvider'], ['goog.async.Deferred', 'ydn.db.Query', 'ydn.db.Key']);
goog.addDependency("../../../ydn-db/js/ydn/db/io/tkey.js", ['ydn.db.io.Key'], ['ydn.db.Key']);
goog.addDependency("../../../ydn-db/js/ydn/db/io/tquery.js", ['ydn.db.io.Query'], ['ydn.db.Query', 'ydn.db.io.QueryService', 'ydn.db.Query']);
goog.addDependency("../../../ydn-db/js/ydn/db/req/abstract_request_executor.js", ['ydn.db.req.AbstractRequestExecutor'], ['goog.async.Deferred', 'goog.debug.Logger', 'ydn.db.Query', 'ydn.db.Key', 'ydn.db.InternalError']);
goog.addDependency("../../../ydn-db/js/ydn/db/req/indexed_db.js", ['ydn.db.req.IndexedDb'], ['goog.async.DeferredList', 'ydn.db.req.AbstractRequestExecutor', 'ydn.json', 'ydn.error']);
goog.addDependency("../../../ydn-db/js/ydn/db/req/memory_store.js", ['ydn.db.req.SimpleStore'], ['goog.asserts', 'goog.async.Deferred', 'goog.Timer', 'ydn.db.req.AbstractRequestExecutor']);
goog.addDependency("../../../ydn-db/js/ydn/db/req/websql.js", ['ydn.db.req.WebSql'], ['goog.async.Deferred', 'goog.debug.Logger', 'goog.events', 'ydn.async', 'ydn.db.req.AbstractRequestExecutor', 'ydn.json']);
goog.addDependency("../../../ydn-db/js/ydn/db/tr/html5_storage.js", ['ydn.db.tr.LocalStorage', 'ydn.db.tr.SessionStorage'], ['ydn.db.tr.SimpleStorage']);
goog.addDependency("../../../ydn-db/js/ydn/db/tr/indexed_db.js", ['ydn.db.tr.IndexedDb'], ['ydn.db.adapter.IndexedDb', 'ydn.db.tr.IDatabase', 'ydn.db.tr.IdbMutex']);
goog.addDependency("../../../ydn-db/js/ydn/db/tr/i_database.js", ['ydn.db.tr.IDatabase'], ['ydn.db.adapter.IDatabase', 'ydn.db.tr.Mutex']);
goog.addDependency("../../../ydn-db/js/ydn/db/tr/i_storage.js", ['ydn.db.tr.IStorage'], ['ydn.db.core.IStorage', 'ydn.db.tr.Mutex']);
goog.addDependency("../../../ydn-db/js/ydn/db/tr/i_tx_storage.js", ['ydn.db.tr.ITxStorage'], ['ydn.db.core.IStorage', 'ydn.db.tr.Mutex']);
goog.addDependency("../../../ydn-db/js/ydn/db/tr/mutex.js", ['ydn.db.tr.Mutex', 'ydn.db.tr.SqlMutex', 'ydn.db.tr.IdbMutex'], ['goog.array', 'goog.asserts', 'ydn.db.InvalidStateError']);
goog.addDependency("../../../ydn-db/js/ydn/db/tr/simple_storage.js", ['ydn.db.tr.SimpleStorage'], ['ydn.db.adapter.SimpleStorage', 'ydn.db.tr.IDatabase']);
goog.addDependency("../../../ydn-db/js/ydn/db/tr/storage.js", ['ydn.db.tr.Storage'], ['ydn.db.core.Storage', 'ydn.db.tr.IndexedDb', 'ydn.db.tr.WebSql', 'ydn.db.tr.LocalStorage', 'ydn.db.tr.SessionStorage', 'ydn.db.tr.SimpleStorage', 'ydn.db.tr.ITxStorage', 'ydn.db.tr.IStorage', 'ydn.db.tr.TxStorage']);
goog.addDependency("../../../ydn-db/js/ydn/db/tr/tx_storage.js", ['ydn.db.tr.TxStorage'], ['ydn.error.NotSupportedException']);
goog.addDependency("../../../ydn-db/js/ydn/db/tr/websql.js", ['ydn.db.tr.WebSql'], ['ydn.db.adapter.WebSql', 'ydn.db.tr.IDatabase', 'ydn.db.tr.SqlMutex']);
goog.addDependency("../../../ydn-db/js/ydn/db/utils/test_utils.js", ['ydn.db.test'], ['ydn.db.io.QueryService']);
