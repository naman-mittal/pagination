//
//  NativeCalculationModule.m
//  pagination
//
//  Created by Naman Mittal on 19/03/23.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"
@interface
RCT_EXTERN_MODULE(NativeCalculationModule, NSObject)
RCT_EXTERN_METHOD(performCalculation:(nonnull NSNumber)value1 withValue2:(nonnull NSNumber)value2 withCallback:(RCTResponseSenderBlock)callback)
@end
