//
//  eeboxToolsAppModule.m
//  Pods
//

#import "eeboxToolsAppModule.h"
#import <WeexPluginLoader/WeexPluginLoader.h>

@interface eeboxToolsAppModule ()

@end

@implementation eeboxToolsAppModule

@synthesize weexInstance;

WX_PlUGIN_EXPORT_MODULE(eeboxTools, eeboxToolsAppModule)
WX_EXPORT_METHOD(@selector(simple:))
WX_EXPORT_METHOD(@selector(call:callback:))
WX_EXPORT_METHOD_SYNC(@selector(retMsg:))

//简单
- (void)simple:(NSString*)msg
{
    NSLog(@"日志输出：%@", msg);
}

//回调演示
- (void)call:(NSString*)msg callback:(WXModuleKeepAliveCallback)callback
{
    if (callback != nil) {
        callback([@"返回" stringByAppendingString:msg], NO);
    }
}

//同步返回
- (NSString*)retMsg:(NSString*)msg
{
    return [@"返回" stringByAppendingString:msg];
}

@end
